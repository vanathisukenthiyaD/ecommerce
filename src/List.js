 const Lists = () => {
     const product = [
        {
            id:1,
            title:"apple",
            price:"$10",
            img: "https://www.google.com/imgres?q=apple%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-psd%2Fclose-up-delicious-apple_23-2151868338.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fapple-fruit&docid=_Z7KPTuPEYQcqM&tbnid=GYQrNmU7jV3b1M&vet=12ahUKEwihnauu2qWQAxWmRWcHHcKTAC4QM3oECBQQAA..i&w=740&h=780&hcb=2&ved=2ahUKEwihnauu2qWQAxWmRWcHHcKTAC4QM3oECBQQAA"
        },
        {
            id:2,
            title:"banana",
            price:"$20",
            img: "https://www.bing.com/images/search?view=detailV2&ccid=KhdGeX1d&id=4470F1E9DE8078CCA20459107F2778D833898D0E&thid=OIP.KhdGeX1d8QMmtow7Lm5AZAHaF1&mediaurl=https%3a%2f%2fwww.applesfromny.com%2fwp-content%2fuploads%2f2020%2f05%2f20Ounce_NYAS-Apples2.png&exph=1889&expw=2400&q=banana&FORM=IRPRST&ck=B30B6BA9529AB9E08F0F4309681F3783&selectedIndex=17&itb=1"
        }
     ]


    return (
    <div>
      {product.map((bag)=>(
        <div key={bag.id}>
            <h1>{bag.title}</h1>
            <h2>${bag.price}</h2>
            <img src={bag.img} alt="" width={100}/>
            <hr/>
            </div>

      ))}
    </div>
  )
}
     export default Lists;