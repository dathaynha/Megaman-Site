/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//B1: tao 1 mang 2 chieu de luu thong  tin
function make2DArray(cols, rows) {
  var arr = new Array(cols);//tao hang
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);//chen o vao moi hang
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 20;

var totalBees = 30;


function setup() {
  createCanvas(401, 401); //+1px vi stroke( aka vien ben ngoai) +them 1px
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {             
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);    //moi o nho cua grid chua thong tin cua 1 cell
    }
  }

  // Pick totalBees spots
  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      options.push([i, j]);
    }
  }


  for (var n = 0; n < totalBees; n++) {
    var index = floor(random(options.length));
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    // Deletes that spot so it's no longer an option
    options.splice(index, 1);
    grid[i][j].bee = true;
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) 
      grid[i][j].countBees();
    }
  }



function gameOver() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].revealed = true;
    }
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {            //return true neu nhu MouseX va MouseY nam trong khoang x, y cua cell (this.x, this.y tra ve x y cua cell)
            grid[i][j].reveal();                                                //return false neu nhu ko phai
   

        if (grid[i][j].bee) {
          gameOver();
        }

      }
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
