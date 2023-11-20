const Page = () => {
  const handleform = async (formData) => {
    'use server';
    console.log(formData);
    const username = formData.get('username');
    console.log('Hello', username);
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
