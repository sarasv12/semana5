var vec=["Diego","Maria","Jorge","Ana"];
console.log(vec);

var si=function()
{
	var i=0;
	var nom=document.getElementById("nom").value;
	var ul=vec.length-1; 
	while(i<vec.length)
	{
		if(nom==vec[i])
		{
			var ult=vec[ul];
			vec[ul]=vec[i];
			vec[i]=ult;
			vec.pop();
			console.log(vec);
			i=vec.length;
			document.getElementById("re").value="Eliminado con éxito";
			document.getElementById("nom").value="";
			var s;
		}
		else
		{
			i=i+1;
			if (nom!=vec[i])
			{
				document.getElementById("re").value=nom+" no está en el vector";
			}
		}
	}
}

var ing=function()
{
	var nombi=document.getElementById("nombi").value;
	vec.push(nombi);
	console.log(vec);
	document.getElementById("nombi").value="";
}