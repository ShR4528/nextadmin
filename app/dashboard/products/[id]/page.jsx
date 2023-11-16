import styles from '@/app/ui/dashboard/products/singleProduct/singleProducts.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='' fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type='text' name='title' placeholder='John doe' />
          <label>Price</label>
          <input type='email' name='price' placeholder='Johndoe@gmail.com' />
          <label>Stock</label>
          <input type='text' name='color' />
          <label>Color</label>
          <input type='text' name='phone' placeholder='+1232425255' />
          <label>Size</label>
          <textarea type='text' name='size' placeholder='Chicago' />
          <label>Cat</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows='10'
            placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
