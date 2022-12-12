from flask import Flask,abort,redirect
from flask_restful import Api, Resource, request,reqparse
from flask_mail import Mail, Message
#from flask_sqlalchemy import SQLAlchemy

from google.cloud import spanner
from google.cloud.spanner import param_types
from flask import render_template
import configparser
import os
import re
import sqlite3
import json
import time

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "C:/Users/Suprith/Desktop/working_dir/car_parking_project/new.json"

app = Flask(__name__)
api = Api(app)

instance_id = "parkit"
database_id = "parkit"
spanner_client = spanner.Client()
instance = spanner_client.instance(instance_id)
database = instance.database(database_id)

name = ""
number = ""
email  =""
password=""

param_types1={}

def insert_user(transaction):
    row_ct = transaction.execute_update(
            "INSERT INTO user (ph_no, name, email, password) "
            "VALUES (@number, @name, @email, @password)",
            params={
                "number":number,
                "name":name,
                "email":email,
                "password":password,
                },
            param_types={
                "number": param_types.STRING,
                "name": param_types.STRING,
                "email":param_types.STRING,
                "password": param_types.STRING,
                },
            request_options={"request_tag": "app=concert,env=dev,action=insert"},
    )
    
    
@app.route("/add", methods = ["POST"])
def add():
    global name
    global number
    global email
    global password
    name = request.form['name']
    number = request.form['ph_no']
    email  = request.form['email']
    password = request.form['password']
    try:
        database.run_in_transaction(insert_user,transaction_tag="app=concert,env=dev")
    finally:
        return redirect("http://localhost:3000/signin")

def signin_transaction(transaction):
    query = "SELECT  ph_no, email FROM user WHERE email = '"+email+"' AND password = '" +password+"'"
    i=0
    results = transaction.execute_sql(query)


@app.route("/signin", methods = ["POST"])
def signin():
    global email
    global password
    email  = request.form['email']
    password = request.form['password']

    database.run_in_transaction(signin_transaction)
    return{"Added":{name:number}},200

if __name__ == "__main__":
    app.run(debug=True)