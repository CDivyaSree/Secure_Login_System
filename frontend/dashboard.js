let usersData = [];

// fetch data once
fetch("http://localhost:5000/api/auth/analytics")
.then(res => res.json())
.then(data => {
  usersData = data;
  showAll(); // default
});

// 🔹 Show all users
function showAll() {
  display(usersData);
}

// 🔹 Users with high login activity
function highActivity() {
  const filtered = usersData.filter(u => u.loginCount > 2);
  display(filtered);
}

// 🔹 Locked users
function lockedUsers() {
  const filtered = usersData.filter(u => u.isLocked === true);
  display(filtered);
}

// 🔹 Top active users
function topUsers() {
  const sorted = [...usersData].sort((a,b) => b.loginCount - a.loginCount);
  display(sorted);
}

// 🔹 Display function
function display(list) {
  let html = "";

  if (list.length === 0) {
    html = "<p>No data found</p>";
  }

  list.forEach(u => {
    html += `
      <div class="card">
        <p>Email: ${u.email}</p>
        <p>Login Count: ${u.loginCount}</p>
        <p>Status: ${u.isLocked ? "🔒 Locked" : "Active"}</p>
      </div>
    `;
  });

  document.getElementById("output").innerHTML = html;
}