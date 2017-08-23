var m1 = [99, 34, 'Hello'];
m1[3] = 34; 
console.log(m1);
for (var i = 0; i < m1.length; i++){
    document.getElementById('out').innerHTML += m1[i] + '<br>';
}