import AdminSidebar from "../../components/AdminSidebar"
import { ChangeEvent, FormEvent, useState } from "react";

const img="https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?w=740&t=st=1721828943~exp=1721829543~hmac=4484bd7f5c84bc678a2eff690b0b25d03a926db1c0a5d3e7556890be532a3ca4"
const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler=(e: FormEvent<HTMLFormElement>)=>{
e.preventDefault();
setName(nameUpdate);
setPrice(priceUpdate);
setStock(stockUpdate);
setPhoto(photoUpdate);
console.log(photoUpdate);
  }

  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="new-product">
        <section>
          <strong>ID- hasdbjdas</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {
            stock >0 ?(
              <span className="green">{stock} Avalable</span>
            ): <span className="red">Not Avalable</span>
          }
          <h3>${price}</h3>
        </section>
        <article>
          <form action="" onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                required
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                required
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input type="file" required onChange={changeImgHandler} />
            </div>
            {photo && <img src={photoUpdate} alt="New Img" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
}







export default ProductManagement