/*
The MIT License (MIT)
Copyright © 2021 Siddharth Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function init() {
    window.konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    window.nextKonamiPos = 0;

    document.addEventListener('keydown', function(e) {
        if (window.konamiSequence.includes(e.key) && e.key == window.konamiSequence[window.nextKonamiPos]) {
            window.nextKonamiPos += 1;
            console.log(window.nextKonamiPos);
            if (window.nextKonamiPos == window.konamiSequence.length) {
                window.nextKonamiPos = 0;
                const event = new Event('konami');
                window.dispatchEvent(event);
            }
        } else {
            window.nextKonamiPos = 0;
        }
    });
}

window.onload = init;