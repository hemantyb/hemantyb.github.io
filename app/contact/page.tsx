"use client";

import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "hemantyb22@gmail.com",
      link: "mailto:hemantyb22@gmail.com",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/hemantyb",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hemantyb/",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: VscTwitter,
      name: "Twitter",
      url: "https://x.com/hemantyb22",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-3">
                    <info.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full bg-gray-100 p-3 text-muted-foreground transition duration-200 hover:-translate-y-0.5 hover:shadow-sm motion-reduce:transform-none dark:bg-gray-800 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    I am very interested in collaborations. Typical response
                    time is within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
