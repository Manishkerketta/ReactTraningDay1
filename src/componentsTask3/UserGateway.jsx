export default function UserGateway(){
    
const user = { name: "Alex", role: "admin", status: "active" };

let panel = null;

  if (user.role === "admin") {
    panel = <AdminPanel />;
  } else {
    panel = null;
  }

if (user.status === "suspended") {
    return <p>Account Suspended: Contact Support</p>;
  }
     return (
    <>
    <h2>Welcome Back</h2>
      {panel}
      </>
  );
}

function AdminPanel(){
     return(<h1>Welcome To Admin Panel</h1>)
}

