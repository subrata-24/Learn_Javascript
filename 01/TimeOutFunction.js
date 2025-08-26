function time()
{
    console.log("Hello World");
}

setTimeout(time, 3 * 1000);//Prints "Hello World" after 3s
setInterval(time, 4 * 1000);//Prints "Hello World" after every 4s
