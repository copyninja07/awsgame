const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const socket = require("socket.io");
const http = require("http");
const { isObject } = require("util");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "game",
});

app.post("/signUp", (req, res) => {
  const {
    userName,
    userMobile,
    userNickName,
    userPassword,
    userReCode,
    userBalance,
    userStatus,
    userDelete,
  } = req.body;

  db.query(
    `INSERT INTO users (userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?)`,
    [
      userName,
      userMobile,
      userNickName,
      userPassword,
      userReCode,
      userBalance,
      userStatus,
      userDelete,
    ],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ mess: "Successfully" });
      }
    }
  );
});

app.post("/userLogin", (req, res) => {
  const { userMobile, userPassword } = req.body;

  db.query(
    `SELECT * FROM users WHERE userMobile='${userMobile}' AND userPassword='${userPassword}'`,
    (err, result) => {
      if (result.length === 0) {
        res.json("Mobile number and Password is wrong");
      } else if (result.length === 1) {
        res.status(200).json({ mess: "Successfully", data: result });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.post("/blankDetails", (req, res) => {
  const {
    userId,
    actualName,
    ifseCode,
    bankName,
    accountNumber,
    state,
    city,
    address,
    mobileNumber,
    email,
    upiAccount,
    userStatus,
    userDelete,
  } = req.body;

  db.query(
    `INSERT INTO bankdetails (userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      userId,
      actualName,
      ifseCode,
      bankName,
      accountNumber,
      state,
      city,
      address,
      mobileNumber,
      email,
      upiAccount,
      userStatus,
      userDelete,
    ],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ mess: "Successfully" });
      }
    }
  );
});

app.post("/addressDetails", (req, res) => {
  const {
    userId,
    fullName,
    mobileNumber,
    pinCode,
    state,
    city,
    detaileAddress,
    status,
    deleteStatus,
  } = req.body;

  db.query(
    `INSERT INTO useraddress (userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus) VALUES (?,?,?,?,?,?,?,?,?)`,
    [
      userId,
      fullName,
      mobileNumber,
      pinCode,
      state,
      city,
      detaileAddress,
      status,
      deleteStatus,
    ],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ mess: "Successfully" });
      }
    }
  );
});

app.post("/paymentReq", (req, res) => {
  const {
    userId,
    paymentHeading,
    paymentContent,
    paymentImage,
    status,
    dateTime,
  } = req.body;

  db.query(
    `INSERT INTO payment (userId, paymentHeading, paymentContent, paymentImage, status, dateTime) VALUES (?,?,?,?,?,?)`,
    [userId, paymentHeading, paymentContent, paymentImage, status, dateTime],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ mess: "Successfully" });
      }
    }
  );
});

app.post("/showBankDetails", (req, res) => {
  const { userId } = req.body;

  db.query(
    `SELECT * FROM bankdetails WHERE userId='${userId}' AND userDelete=1`,
    (err, result) => {
      if (result.length === 0) {
        res.json("Not add Bank Account ");
      } else if (result.length === 1) {
        res.status(200).json({ mess: "Successfully", data: result });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.post("/showAddressDetails", (req, res) => {
  const { userId } = req.body;

  db.query(
    `SELECT * FROM useraddress WHERE userId='${userId}' AND deleteStatus=1`,
    (err, result) => {
      if (result.length === 0) {
        res.json("Not add Address ");
      } else if (result.length === 1) {
        res.status(200).json({ mess: "Successfully", data: result });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.post("/remove/AddressDetails", (req, res) => {
  const { userId } = req.body;

  db.query(
    `UPDATE  useraddress SET deleteStatus='0' WHERE userId='${userId}'`,
    (err, result) => {
      if (result) {
        res.status(200).json({ mess: "Successfully" });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.post("/remove/BankDetails", (req, res) => {
  const { userId } = req.body;

  db.query(
    `UPDATE  bankdetails SET userDelete='0' WHERE userId='${userId}'`,
    (err, result) => {
      if (result) {
        res.status(200).json({ mess: "Successfully" });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.post("/countdown", (req, res) => {
  const endTime = +new Date();
  console.log(typeof endTime);

  db.query(
    `INSERT INTO counttime (endTime) VALUES (?)`,
    [endTime],
    (err, result) => {
      if (result) {
        res.status(200).json({ mess: "Successfully countdown" });
      } else {
        res.status(400).json(err);
      }
    }
  );
});

app.get("/showCountdown", (req, res) => {
  db.query(`SELECT * FROM counttime`, (err, result) => {
    return res.json(result);
  });
});

app.listen("4000", () => console.log("server is run on 4000"));
