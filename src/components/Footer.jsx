import { Link } from "@nextui-org/react";

export default function Footer () {
  return (
    <footer className="flex flex-col home-footer w-full h-40 mt-16 gap-2 p-10 sm:h-60 justify-center text-center items-center" style={{backgroundColor: '#E8D7B9'}}>
      <p className="text-foreground">
        &copy; 2024 Pizzeria. All rights reserved.
      </p>
      <Link color="primary" className="font-poppins" href="#">
        Terms and conditions
      </Link>
    </footer>
  );
}