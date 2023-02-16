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
nginx -h
Shows the NGINX help menu.

nginx -v
Shows the NGINX version.

nginx -V
Shows the NGINX version, build information, and configuration arguments,
which show the modules built into the NGINX binary.

nginx -t
Tests the NGINX configuration.

nginx -T
Tests the NGINX configuration and prints the validated configuration to the screen. This command is useful when seeking support.

nginx -s [signal]
The -s flag sends a signal to the NGINX master process.
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
- [Nginx cook book](https://www.nginx.com/resources/library/complete-nginx-cookbook/)