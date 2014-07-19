/* GCompris
 *
 * Copyright (C) 2014 Bruno Coudoin
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

var memory_addminusmultdiv = [
['1-0', 1],
['1+0', 1],
['2-0', 2],
['2+0', 2],
['2-1', 1],
['2+1', 3],
['3-0', 3],
['3+0', 3],
['3-1', 2],
['3+1', 4],
['3-2', 1],
['3+2', 5],
['4-0', 4],
['4+0', 4],
['4-1', 3],
['4+1', 5],
['4-2', 2],
['4+2', 6],
['4-3', 1],
['4+3', 7],
['1*0', 0],
['2*0', 0],
['2*1', 2],
['3*0', 0],
['3*1', 3],
['3*2', 6],
['4*0', 0],
['4*1', 4],
['4*2', 8],
['4*3', 12],
['6-5', 1],
['6+5', 11],
['7-5', 2],
['7+5', 12],
['7-6', 1],
['7+6', 13],
['8-5', 3],
['8+5', 13],
['8-6', 2],
['8+6', 14],
['8-7', 1],
['8+7', 15],
['9-5', 4],
['9+5', 14],
['9-6', 3],
['9+6', 15],
['9-7', 2],
['9+7', 16],
['9-8', 1],
['9+8', 17],
['1/1', 1],
['2/2', 1],
['3/3', 1],
['4/4', 1],
['5/5', 1],
['6/6', 1],
['7/7', 1],
['8/8', 1],
['9/9', 1],
['11-10', 1],
['11+10', 21],
['12-10', 2],
['12+10', 22],
['12-11', 1],
['12+11', 23],
['13-10', 3],
['13+10', 23],
['13-11', 2],
['13+11', 24],
['13-12', 1],
['13+12', 25],
['14-10', 4],
['14+10', 24],
['14-11', 3],
['14+11', 25],
['14-12', 2],
['14+12', 26],
['14-13', 1],
['14+13', 27],
['1/1', 1],
['2/2', 1],
['3/3', 1],
['4/4', 1],
['5/5', 1],
['6/6', 1],
['7/7', 1],
['8/8', 1],
['9/9', 1],
['5/1', 5],
['10/10', 1],
['2/1', 2],
['4/2', 2],
['6/3', 2],
['8/4', 2],
['12/4', 3],
['15/5', 3],
['18/6', 3],
['4/1', 4],
['8/2', 4],
['21-20', 1],
['21+20', 41],
['22-20', 2],
['22+20', 42],
['22-21', 1],
['22+21', 43],
['23-20', 3],
['23+20', 43],
['23-21', 2],
['23+21', 44],
['23-22', 1],
['23+22', 45],
['24-20', 4],
['24+20', 44],
['24-21', 3],
['24+21', 45],
['24-22', 2],
['24+22', 46],
['24-23', 1],
['24+23', 47],
['26-25', 1],
['26+25', 51],
['27-25', 2],
['27+25', 52],
['27-26', 1],
['27+26', 53],
['28-25', 3],
['28+25', 53],
['28-26', 2],
['28+26', 54],
['28-27', 1],
['28+27', 55],
['29-25', 4],
['29+25', 54],
['29-26', 3],
['29+26', 55],
['29-27', 2],
['29+27', 56],
['29-28', 1],
['29+28', 57],
['11*10', 110],
['12*10', 120],
['12*11', 132],
['13*10', 130],
['13*11', 143],
['13*12', 156],
['14*10', 140],
['14*11', 154],
['14*12', 168],
['14*13', 182],
['10/2', 5],
['10/2', 5],
['15/3', 5],
['15/3', 5],
['20/4', 5],
['20/4', 5],
['25/5', 5],
['25/5', 5],
['30/6', 5],
['30/6', 5],
['35/7', 5],
['35/7', 5],
['40/8', 5],
['40/8', 5],
['45/9', 5],
['45/9', 5],
['50/10', 5],
['50/10', 5],
['55/11', 5],
['55/11', 5],
['60/12', 5],
['60/12', 5],
['65/13', 5],
['65/13', 5],
['70/14', 5],
['75/15', 5],
['80/16', 5],
['85/17', 5],
['6/1', 6],
['31-30', 1],
['31+30', 61],
['32-30', 2],
['32+30', 62],
['32-31', 1],
['32+31', 63],
['33-30', 3],
['33+30', 63],
['33-31', 2],
['33+31', 64],
['33-32', 1],
['33+32', 65],
['34-30', 4],
['34+30', 64],
['34-31', 3],
['34+31', 65],
['34-32', 2],
['34+32', 66],
['34-33', 1],
['34+33', 67],
['16*15', 240],
['17*15', 255],
['17*16', 272],
['18*15', 270],
['18*16', 288],
['18*17', 306],
['19*15', 285],
['19*16', 304],
['19*17', 323],
['19*18', 342],
['12/2', 6],
['18/3', 6],
['24/4', 6],
['30/5', 6],
['36/6', 6],
['42/7', 6],
['48/8', 6],
['54/9', 6],
['60/10', 6],
['36-35', 1],
['36+35', 71],
['37-35', 2],
['37+35', 72],
['37-36', 1],
['37+36', 73],
['38-35', 3],
['38+35', 73],
['38-36', 2],
['38+36', 74],
['38-37', 1],
['38+37', 75],
['39-35', 4],
['39+35', 74],
['39-36', 3],
['39+36', 75],
['39-37', 2],
['39+37', 76],
['39-38', 1],
['39+38', 77],
['21*20', 420],
['22*20', 440],
['22*21', 462],
['23*20', 460],
['23*21', 483],
['23*22', 506],
['24*20', 480],
['24*21', 504],
['24*22', 528],
['24*23', 552],
['66/11', 6],
['72/12', 6],
['78/13', 6],
['84/14', 6],
['90/15', 6],
['96/16', 6],
['102/17', 6],
['108/18', 6],
['114/19', 6],
['41-40', 1],
['41+40', 81],
['42-40', 2],
['42+40', 82],
['42-41', 1],
['42+41', 83],
['43-40', 3],
['43+40', 83],
['43-41', 2],
['43+41', 84],
['43-42', 1],
['43+42', 85],
['44-40', 4],
['44+40', 84],
['44-41', 3],
['44+41', 85],
['44-42', 2],
['44+42', 86],
['44-43', 1],
['44+43', 87],
['26*25', 650],
['27*25', 675],
['27*26', 702],
['28*25', 700],
['28*26', 728],
['28*27', 756],
['29*25', 725],
['29*26', 754],
['29*27', 783],
['29*28', 812],
['40/5', 8],
['48/6', 8],
['56/7', 8],
['64/8', 8],
['72/9', 8],
['80/10', 8],
['88/11', 8],
['96/12', 8],
['104/13', 8]]
   


function get() {
    return memory_addminusmultdiv
}
