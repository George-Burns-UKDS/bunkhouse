// Load external dependencies.
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

// Declare as express application.
var app = express();

// Configure body parser to pass data from client to server.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Locate the public folder where the css files etc belong.
app.use(express.static(path.join(__dirname, "public")));

// Load the handlebars middleware.
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// Index route.
app.get("/", (req, res) => {
  res.render("index/index", {
    indexActive: true,
  });
});

// Location route.
app.get("/location", (req, res) => {
  res.render("location/index", {
    locationActive: true,
  });
});

// Gallery route.
app.get("/gallery", (req, res) => {
  res.render("gallery/index", {
    galleryActive: true,
  });
});

// Contact route.
app.get("/contact", (req, res) => {
  if (req.query.success) {
    res.render("contact/index", {
      successMessage:
        "Your email has been sent successfully. We will be in touch shortly.",
      contactActive: true,
    });
  } else {
    res.render("contact/index", {
      contactActive: true,
    });
  }
});

// Terms route.
app.get("/terms", (req, res) => {
  res.render("terms/index", {
    termsActive: true,
  });
});

// Contact form submission.
app.post("/submit-email", (req, res) => {
  var fName = req.body.first_name;
  var lName = req.body.last_name;
  var email = req.body.email;
  var subject = req.body.subject;
  var body_raw = req.body.body;
  var body = body_raw.replace(/(?:\r\n|\r|\n)/g, "<br>");
  var msg = {
    to: "info@bunkhousecardiff.co.uk",
    from: "Bunkhouse Website <georgebt.dev@gmail.com>",
    reply_to: `${email}`,
    subject: `Form Submission - ${subject}`,
    text: `You have received a new message from ${fName} ${lName}\nSubject:\n${subject}\nMessage:\n${body}`,
    html: `
      <h2>You have received a new email from ${fName} ${lName}.</h2>
      <strong><h3>Subject:</h3></strong>
      <span>${subject}</span>
      <br>
      <strong><h3>Message:</h3></strong>
      <span>${body}</span>
      <br>
      <br>
      <strong><span>Reply to them at ${email}</span></strong>
      `,
  };
  sgMail.send(msg);
  res.redirect("/contact?success=true");
});

// Set port number.
var port = process.env.PORT || 3000;

// Listen on selected port.
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
