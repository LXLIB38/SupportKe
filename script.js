*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#050505;
color:white;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
border-bottom:1px solid #1aff1a44;
}

.logo{
font-size:28px;
font-weight:bold;
color:#39ff14;
}

ul{
display:flex;
gap:25px;
list-style:none;
}

a{
text-decoration:none;
color:white;
}

.login{
background:none;
border:1px solid #444;
color:white;
padding:10px 18px;
border-radius:8px;
}

.signup{
background:#39ff14;
border:none;
padding:10px 18px;
border-radius:8px;
font-weight:bold;
}

.hero{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
padding:80px 8%;
align-items:center;
}

.hero h1{
font-size:60px;
line-height:1.1;
}

.hero span{
color:#39ff14;
}

.hero p{
margin:20px 0;
font-size:20px;
color:#ccc;
}

.cta{
background:#39ff14;
border:none;
padding:15px 30px;
border-radius:10px;
font-size:18px;
font-weight:bold;
}

.phone-card{
width:300px;
margin:auto;
padding:40px;
border:1px solid #39ff1440;
border-radius:25px;
background:#111;
box-shadow:0 0 30px #39ff1420;
}

.phone-card button{
margin-top:20px;
background:#39ff14;
border:none;
padding:12px 20px;
border-radius:8px;
}

.features{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
padding:40px 8%;
}

.feature{
background:#111;
padding:25px;
border-radius:15px;
border:1px solid #39ff1420;
}

.profile{
padding:60px 8%;
}

.profile-card{
max-width:500px;
margin:auto;
background:#111;
padding:25px;
border-radius:20px;
border:1px solid #39ff1420;
text-align:center;
}

.profile-card img{
width:100%;
border-radius:15px;
}

.amounts{
display:flex;
justify-content:center;
gap:10px;
margin:20px 0;
}

.amounts button{
padding:10px 15px;
background:#222;
color:white;
border:none;
border-radius:8px;
}

.pay{
width:100%;
padding:15px;
background:#39ff14;
border:none;
font-weight:bold;
border-radius:10px;
}

footer{
padding:30px;
text-align:center;
border-top:1px solid #39ff1420;
margin-top:50px;
}

@media(max-width:900px){

.hero{
grid-template-columns:1fr;
text-align:center;
}

.hero h1{
font-size:40px;
}

.features{
grid-template-columns:1fr;
}

ul{
display:none;
}

    }
