import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className=" h-auto w-[90%] m-auto flex flex-col text-center">
      <div className="flex flex-col gap-20 pt-20 ">
        <h2 className="text-4xl pt-10 text-center">
         Contato
        </h2>

       <div className="">
       <Form/>
       </div>
      </div>
    </section>
  );
};

export default Contact;
