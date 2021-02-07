db.VentasMobiles.aggregate(
    [
        {
            $match: { 
                Venta: {$gt: new Date("2020-01-31")}
            }
        },
        {
            $group:
            {
                _id: { 
                    mes: {$month: "$Venta" },
                    producto: "$Producto"
                },
                VentaTotal: { $sum: "$PrecioUnitario" } }
            }
        ,
        {
            $project: {
                mes: "$_id.mes",
                producto: "$_id.producto",
                _id: 0,
                totalventa: "$VentaTotal",
                IVA: { $multiply: ["$VentaTotal", 0.21] },
                totalmasIVA: { $multiply: ["$VentaTotal", 1.21] },
            }
        },
        {
            $sort: {
                mes: 1, producto: 1
            }
        },
        {
            $match: {
                totalmasIVA: { $gt: 800 }
            }
        }
    ]
).pretty()