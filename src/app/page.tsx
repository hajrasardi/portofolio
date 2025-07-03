"use client";
import Navbar from "@/components/navbar"; // pastikan path sesuai
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, MonitorCheck, Smartphone } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section
          id="home"
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white bg-black  flex-col p-5"
          style={{ backgroundImage: "url('/bg.gif')" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hajrakot.jpg"
              alt="fotoprofile"
              width={400}
              height={400}
              className="rounded-full mb-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80"
            />
          </motion.div>

          <motion.h1
            className="text-center text-3xl sm:text-4xl md:text-5xl pt-10 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            I do code and <br />
            make content{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              about it!
            </span>
          </motion.h1>

          <motion.div
            className="text-center space-y-4 mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>I am a seasoned full-stack software engineer with over</p>
            <p>
              8 years of professional experience, specializing in backend
              development.
            </p>
            <p>My expertise lies in crafting robust and scalable SaaS-based</p>
            <p>architectures on the Amazon AWS platform.</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9 }}
          >
            <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-lg sm:text-xl px-6 py-3 rounded-2xl transition transform hover:scale-105 hover:brightness-110 duration-300">
              Get In Touch
            </Button>
            <Button className="bg-white text-black text-lg sm:text-xl px-6 py-3 rounded-2xl transition transform hover:scale-105 hover:shadow-lg duration-300">
              Download CV
            </Button>
          </motion.div>
        </section>

        <section
          id="about"
          className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto px-4 py-16">
            {/* Kiri: About Me & Card */}
            <div className="flex flex-col items-center md:items-start gap-8">
              {/* Title */}
              <h2 className="text-4xl font-bold border-2 rounded-tl-2xl rounded-br-2xl w-60 h-16 flex justify-center items-center text-center">
                About Me
              </h2>

              {/* Paragraf dalam Card */}
              <Card className="w-170 lg:max-w-[700px] bg-gradient-to-br from-white via-sky-50 to-sky-100 shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl border border-sky-200/70 rounded-2xl">
                <CardContent className="px-8 py-6 space-y-6 text-gray-700 text-[15px] leading-loose">
                  <h3 className="text-blue-500 font-bold text-2xl">Hello!</h3>

                  <p>
                    My name is Hajra and I specialize in web development that
                    utilizes HTML, CSS, JS and REACT etc.
                  </p>
                  <p>
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                  </p>
                  <p>
                    When I'm not coding, I am writing blogs, reading, or picking
                    up some new hands-on art project like photography.
                  </p>
                  <p>
                    I like to have my perspective and belief systems challenged
                    so that I see the world through new eyes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Kanan: Foto */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/foto.jpg"
                alt="foto about"
                width={400}
                height={400}
                className="rounded-2xl w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 object-contain shadow-md"
              />
            </div>
          </div>
        </section>

        <section
          id="mySkills"
          className="min-h-screen bg-black text-white flex items-center justify-center"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-4xl font-bold">My Skills</h2>
              <div className="h-1 w-50 bg-blue-500 rounded-full my-2"></div>{" "}
              <p className="text-[20px]">
                I'm striving to never stop learning and improving
              </p>
            </div>

            <div className="w-full flex justify-center py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* Card 1 */}
                <div
                  className="w-[200px] rounded-2xl h-auto flex flex-col items-center text-gray-700 p-6 shadow-md"
                  style={{ backgroundColor: "#98FAEC" }}
                >
                  <MonitorCheck className="text-4xl mb-2 text-gray-800" />
                  <h1 className="text-xl font-semibold">Web Development</h1>
                  <p className="text-sm">HTML - CSS - JS - REACT</p>
                </div>

                {/* Card 2 */}
                <div
                  className="w-[200px] rounded-2xl h-auto flex flex-col items-center text-gray-700 p-6 shadow-md"
                  style={{ backgroundColor: "#98FAEC" }}
                >
                  <Smartphone className="text-4xl mb-2 text-gray-800" />
                  <h1 className="text-xl font-semibold">App Development</h1>
                  <p className="text-sm">iOS - Android</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-40 justify-items-center">
              {/* HTML */}
              <div className="flex flex-col items-center">
                <div
                  className="w-[100px] h-[100px] rounded-full flex justify-center items-center text-white"
                  style={{ backgroundColor: "#E54F26" }}
                >
                  <FaHtml5 className="text-5xl" />
                </div>
                <p className="mt-2 text-sm font-semibold text-whites">HTML</p>
              </div>

              {/* CSS */}
              <div className="flex flex-col items-center">
                <div
                  className="w-[100px] h-[100px] rounded-full flex justify-center items-center text-white"
                  style={{ backgroundColor: "#0C73B8" }}
                >
                  <FaCss3Alt className="text-5xl" />
                </div>
                <p className="mt-2 text-sm font-semibold text-white">CSS</p>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center">
                <div
                  className="w-[100px] h-[100px] rounded-full flex justify-center items-center text-white"
                  style={{ backgroundColor: "#E7A020" }}
                >
                  <FaJs className="text-5xl" />
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  JavaScript
                </p>
              </div>

              {/* React */}
              <div className="flex flex-col items-center">
                <div
                  className="w-[100px] h-[100px] rounded-full flex justify-center items-center text-white"
                  style={{ backgroundColor: "#28A9E0" }}
                >
                  <FaReact className="text-5xl" />
                </div>
                <p className="mt-2 text-sm font-semibold text-white">React</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portofolio"
          className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
        >
          <div>
            <h2 className="flex flex-row text-4xl font-bold">Portofolio</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-5xl h-fit">
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                            className="w-full rounded-xl"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experiences"
          className="min-h-screen bg-black text-white flex items-center justify-center"
        >
          <div>
            <h2 className="flex flex-row text-4xl font-bold">My Experiences</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-5xl h-fit">
              <div className="col-span-2 bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Experience 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-amber-400">02</div>
              <div className="bg-amber-500">03</div>
              <div className="col-span-2 bg-amber-500">04</div>
            </div>
          </div>
        </section>

        <section
          id="testimonial"
          className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
        >
          <div>
            <h2 className="flex flex-row text-4xl font-bold">Testimonial</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-5xl h-fit">
              <div className="col-span-2 bg-purple-500 rounded-xl">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Experience 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Image
                            src={"/hajrakot.jpg"}
                            alt={"experience"}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              </div>
              <div className="bg-amber-400">02</div>
              <div className="bg-amber-500">03</div>
              <div className="col-span-2 bg-amber-500">04</div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen bg-black text-white flex items-center justify-center m-5 "
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-4xl font-bold">Contact Me</h2>
              <div className="h-1 w-50 bg-blue-500 rounded-full my-2"></div>{" "}
              <p className="text-[20px] text-white">
                I'm currently available for freelance work
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold border-2 rounded-tl-2xl rounded-br-2xl w-100 text-center">
                Send Me A Message
              </h3>
            </div>
            <div className="text-2xl flex flex-row justify-between items-center w-5xl h-auto">
              <div>
                <Label>Your Name *</Label>
                <Input
                  type="text"
                  className="w-[450px]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label>Your Email *</Label>
                <Input
                  type="text"
                  className="w-[450px]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <Label>Your Message *</Label>
              <Input type="text" className="" placeholder="Enter your needs" />
            </div>
            <div className="flex items-center justify-center">
              <Button className="w-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-lg sm:text-xl px-6 py-3 rounded-2xl transition transform hover:scale-105 hover:brightness-110 duration-300">
                Send Message
                <Send />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
