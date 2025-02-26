import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";


export default function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <Card className="p-6 bg-white rounded-lg shadow-lg w-1/4 h-auto">
          <CardHeader className="text-center text-5xl text-black mb-4 -mt-8">
            <CardTitle>Sign up to get started...</CardTitle>
          </CardHeader>
          <div className="border-b-4 border-neutral-950 mb-2 rounded-3xl"></div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <Button className="flex items-center justify-center w-full h-fit px-4 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700">
              <FaGithub className="mr-2" /> Continue with GitHub
            </Button>
            <Button className="flex items-center justify-center w-full h-fit px-4 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700">
              Continue with Google
            </Button>
            <Button className="flex items-center justify-center w-full h-fit px-4 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700">
              Continue with ?
            </Button>
          </div>
        </Card>
      </div>
    );
}
