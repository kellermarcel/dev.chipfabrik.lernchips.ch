//global.toastr = require("toastr")
//import "../stylesheets/application"

//import "./js/file.js";
//import "./js/main.js";
//import "./js/header.js";
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@hotwired/turbo-rails"

Rails.start()
ActiveStorage.start()