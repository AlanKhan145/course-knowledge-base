# What Is HTTP and How Does It Work

## Overview
This lecture explains the HyperText Transfer Protocol (HTTP) and how it enables communication between a Flutter client and a backend server. It covers the request-response cycle, common HTTP methods, and how data is structured and transferred. Understanding HTTP fundamentals is critical before writing any networking code in Flutter.

## Key Points
- HTTP is a stateless, request-response protocol used to transfer data between client and server
- Common HTTP methods include GET (fetch data), POST (send data), PUT/PATCH (update data), and DELETE (remove data)
- Every HTTP request contains a URL, headers, a method, and optionally a body
- Responses include a status code (e.g., 200 OK, 404 Not Found, 500 Server Error) and an optional body
- Data is commonly exchanged in JSON format, which Dart can encode and decode natively

## Tips
- Always check the HTTP status code before processing a response body
- Status codes in the 2xx range indicate success; 4xx indicates client errors; 5xx indicates server errors
- Use tools like Postman or the browser's network tab to inspect HTTP traffic during development

## Notes
HTTP operates over TCP/IP and is the foundation of the modern web and most mobile APIs. While HTTPS (HTTP Secure) adds encryption via TLS, the programming model in Dart is identical. Familiarity with HTTP verbs and status codes will make debugging networking issues significantly easier.

## Summary
HTTP is the request-response protocol that Flutter apps use to communicate with backends, using methods like GET and POST to exchange JSON data.
