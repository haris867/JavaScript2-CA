// upload image

const url = "https://nf-api.onrender.com/api/v1/social/profiles/Haris13/media";

const data = JSON.stringify({
  banner:
    "https://images.unsplash.com/photo-1585170236738-aadfce97f025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1726&q=80",
  avatar:
    "https://user-images.githubusercontent.com/73777398/193845653-a38448c5-1c7e-4f61-9709-1eaa0ea0a36d.gif",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY0LCJuYW1lIjoiSGFyaXMxMyIsImVtYWlsIjoiTXVoVXNtNjgwNTZAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjY0ODkzMzY3fQ.2FB4zWhefwaoLFRn_lGgtizjq8AU5oDpNWvWLiQPuM4";

const options = {
  method: "put",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: data,
};

async function uploadImage() {
  const response = await fetch(url, options);
  console.log(response);
  const data = await response.json();
  console.log(data);
}

// uploadImage();
