from fastapi import FastAPI, Body
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="ULTRA Backend")

# Example user data model
class User(BaseModel):
    email: str
    password: str
    age: Optional[int] = None
    gender: Optional[str] = None
    nationality: Optional[str] = None
    # We can add more fields as needed

# In-memory storage for now
FAKE_DB = {
    "users": []
}

@app.get("/")
def read_root():
    return {"message": "Welcome to ULTRA Backend!"}

@app.post("/register")
def register_user(user: User):
    # In a real app, you'd check if user already exists, hash the password, etc.
    FAKE_DB["users"].append(user.dict())
    return {"status": "success", "user": user.dict()}

@app.post("/login")
def login_user(email: str = Body(...), password: str = Body(...)):
    # Check if user with this email/password is in our FAKE_DB
    for u in FAKE_DB["users"]:
        if u["email"] == email and u["password"] == password:
            return {"status": "success", "message": "Logged in!"}
    return {"status": "error", "message": "Invalid credentials"}

@app.post("/onboarding")
def onboarding(data: dict = Body(...)):
    # 'data' can contain the demographics & mental health answers
    # For demonstration, we just return it
    return {"status": "received", "onboarding_data": data}
