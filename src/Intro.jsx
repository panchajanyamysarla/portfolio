import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

const Intro = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-darkBg"
    >
      <div className="text-center">
        <p className="text-primary text-lg mb-4">Hi, my name is</p>
        <h1 className="text-textLight text-4xl md:text-6xl font-bold">
          Panchajanya Mysarla.
        </h1>
        <h2 className="text-textMain text-2xl md:text-4xl mt-2">
          I build things for the web.
        </h2>
        <p className="text-textMain my-4 max-w-lg mx-auto">
          I’m a software engineer specializing in building exceptional digital
          experiences.
        </p>

        <Button href="#contact" startIcon={<EmailIcon />}>
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Intro;
