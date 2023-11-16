import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/ui/dashboard/products/products.module.css';
//import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';

// import Pagination from '@/app/ui/dashboard/pagination/pagination';
// import { fetchProducts } from "@/app/lib/data";
//import { deleteProduct } from '@/app/lib/actions';
import Paginition from '@/app/ui/dashboard/paginition/paginition';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src='/noproduct.jpg'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                {/* {product.title} */}
              </div>
            </td>
            <td>Hello</td>
            <td>$68688</td>
            <td>createdAt?</td>
            <td>stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/test'>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type='hidden' name='id' />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginition />
    </div>
  );
};

export default ProductsPage;
