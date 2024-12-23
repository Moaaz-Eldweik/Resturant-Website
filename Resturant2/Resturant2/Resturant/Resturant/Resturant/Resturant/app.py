from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

users_db = {}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error_message = ""
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if users_db.get(username) == password:
         return redirect(url_for('home'))
        else:
            error_message = "Invalid login details. Try again."
    
    return render_template('login.html', error_message=error_message)

@app.route('/register', methods=['GET', 'POST'])
def register():
    error_message = ""
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username in users_db:
            error_message = "User already exists. You can log in."
        else:
            users_db[username] = password
            return redirect(url_for('login'))
    
    return render_template('register.html', error_message=error_message)


if __name__ == "__main__":
    app.run(debug=True)