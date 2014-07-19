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

var memory_multdiv = [
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
            ['1/1', 1],
            ['2/2', 1],
            ['3/3', 1],
            ['4/4', 1],
            ['5/5', 1],
            ['6/6', 1],
            ['7/7', 1],
            ['8/8', 1],
            ['9/9', 1],
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
            ['6*5', 30],
            ['7*5', 35],
            ['7*6', 42],
            ['8*5', 40],
            ['8*6', 48],
            ['8*7', 56],
            ['9*5', 45],
            ['9*6', 54],
            ['9*7', 63],
            ['9*8', 72],
            ['12/3', 4],
            ['16/4', 4],
            ['20/5', 4],
            ['24/6', 4],
            ['28/7', 4],
            ['32/8', 4],
            ['36/9', 4],
            ['5/1', 5],
            ['5/1', 5],
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
            ['104/13', 8]
            ]


function get() {
    return memory_multdiv
}
