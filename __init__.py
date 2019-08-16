import os
import json
from flask import Flask, request, render_template, g, redirect, Response, url_for, session, send_from_directory
from flask import jsonify
import json
import urllib
#from nltk.corpus import wordnet as wn
import requests
import time
from nltk.parse.stanford import StanfordDependencyParser
from os import listdir
from os.path import isfile, join
import uuid
#from werkzeug.security import generate_password_hash, check_password_hash
#import mimetypes
# import base64
import binascii
########################################
# importing cv stuff
#import sys 

#sys.path.append(os.path.abspath("/home/ecenaz/research/symbol_finder/cv_stuff/Salient-Object-Detection"))
#from inference import *

#sys.path.append(os.path.abspath("/home/ecenaz/research/symbol_finder/cv_stuff/Object-View-Crop"))
tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__, template_folder=tmpl_dir)
app.secret_key = 'a2ab7c745492748d1a0f61bc33664526'

# abs_path = '/var/www/word_blender/word_blender/'
abs_path = '/Users/samross/Desktop/Main/Barnard/Research/word_blender/'

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/word_blend_input', methods=['POST', 'GET'])
def word_blend_input():
  #get available concepts from each user to use as autocomplete or list of concepts
  all_concepts = get_all_concepts()
  return render_template("word_blend_input.html", all_concepts=all_concepts)


def get_all_concepts():
  all_concepts = {}
  user_data = abs_path+'user_data.json'
  if os.path.isfile(user_data):
      with open(user_data) as u:
        users = json.load(u)
        for x in users:
          path_metadata = abs_path +'users/' + x + '/metadata_' + x + '.json'
          if os.path.isfile(path_metadata):
            with open(path_metadata) as meta: 
              data = json.load(meta)
              if(len(data)>0):
                for k in data:
                # check if the concept is deleted or if it has symbols saved first, before adding to the array
                  if data[k]['deleted'] == "False" and data[k]['symbol_count']>0:
                    all_concepts[k] = data[k]
                    all_concepts[k]['user'] = x
  return all_concepts

#user facing, multiple word blending
@app.route('/word_blender/<data>', methods=['GET', 'POST'])
def word_blender_multiple(data):
  input_data = data.split('_')
  user = input_data[0]
  concept_id = input_data[1]
  concept_name = input_data[2]
  symbols_for_concept = get_symbols_for_concept(user, concept_id + '_' + concept_name + '.json')
  input_words = input_data[3].split('+')
  return render_template("word_blender.html", input_words=input_words, symbols_for_concept=symbols_for_concept)

def get_symbols_for_concept(user, file_id) :
  symbol_file_path = abs_path + 'users/' + user + '/symbols_' + user + '/' + file_id
  symbols = {}
  with open(symbol_file_path, 'r') as f:
    data = json.load(f)
    symbols = data
  return symbols


if __name__ == "__main__":
    app.run(debug=True, port=8000)
