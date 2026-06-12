import React from "react";

function ClientDashboard(){

return(

<div className="p-8">

<h1
className="
text-3xl
font-bold
mb-8
"
>
Client Dashboard
</h1>

<div
className="
grid
md:grid-cols-3
gap-6
"
>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Posted Jobs</h2>
<p className="text-3xl font-bold">
25
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Total Applicants</h2>
<p className="text-3xl font-bold text-blue-600">
50
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Hired</h2>
<p className="text-3xl font-bold text-green-600">
10
</p>
</div>

</div>

</div>

);

}

export default ClientDashboard;