const Page = () => {
  const handleform = async (formData) => {
    'use server';

    const username = formData.get('username');
  };
  return (
    <div>
      <form action={handleform}>
        <input type='text' name='username' />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Page;
