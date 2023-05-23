from http.server import BaseHTTPRequestHandler, HTTPServer

class MyHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/data.json':
            try:
                with open('data.json', 'rb') as file:
                    data = file.read()
            except FileNotFoundError:
                self.send_response(404)
                self.end_headers()
                self.wfile.write(b'File not found')
            else:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(data)
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Not found')

def run_server():
    address = ('localhost', 8000)
    server = HTTPServer(address, MyHTTPRequestHandler)
    print('Server listening on http://localhost:8000...')
    server.serve_forever()

run_server()
