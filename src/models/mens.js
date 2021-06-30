const express = require("express");
const validator = require("validator");

const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    category:{
        type:String,
        required: true,
    },
    name:{
        type: String,
        required : true,
        trim:true
    },
    language:{
        type: String,
        required : true,
        trim:true
    },
    votes:{
        type: Number,
        required : true,
        trim:true
    },
    genre:{
        type: String,
        required : true,
        trim:true
    },
})

const Mensranking = new mongoose.model("Mensranking", menSchema);

module.exports = Mensranking;