# Nginx For Practic

## Config File
Nginx config file structure using <b>Block Directive</b>.(A simple directive consists of the name and parameters separated by spaces and ends with a semicolon (";"))
ex:
```
http {
    .....
    server {
        ....
    }
    .....
}
```
"http , server and ..." are some of the directives.

## Nginx Command 
```
nginx -s [signal]

signal : 
[
- stop — fast shutdown
- quit — graceful shutdown
- reload — reloading the configuration file
- reopen — reopening the log files
]
```

## Some useful links
- [Nginx beginner guide](https://nginx.org/en/docs/beginners_guide.html)
- [More directive in nginx](https://www.javatpoint.com/nginx-directives)
- [Full example nginx configuration](https://www.nginx.com/resources/wiki/start/topics/examples/full/)