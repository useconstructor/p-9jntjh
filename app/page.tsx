"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Zap, Monitor, Layers, Sparkles, Play, Star, Plus, Minus, ArrowRight, Check, Keyboard, Cpu, Cable, Volume2, Grid3X3, Settings, Youtube, Twitch, Video, Music, Gamepad2, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeIntegration, setActiveIntegration] = useState(0)

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Specs", href: "#specs" },
    { label: "Integrations", href: "#integrations" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ]

  const features = [
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: "15 LCD Keys",
      description: "Fully customizable LCD keys that display icons, folders, or live feedback. Each key adapts to your workflow.",
      span: "col-span-2 row-span-2"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Haptic Feedback",
      description: "Feel every press with precision haptic response.",
      span: "col-span-1 row-span-1"
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: "USB-C",
      description: "Universal connectivity, blazing fast response.",
      span: "col-span-1 row-span-1"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Native Integration",
      description: "Works seamlessly with OBS, Premiere Pro, Twitch, and hundreds more.",
      span: "col-span-1 row-span-1"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "One Touch Automation",
      description: "Execute complex workflows with a single press.",
      span: "col-span-1 row-span-1"
    }
  ]

  const stats = [
    { value: "15", label: "LCD Keys" },
    { value: "500+", label: "Integrations" },
    { value: "100K+", label: "Creators" },
    { value: "<1ms", label: "Response" }
  ]

  const integrations = [
    { name: "OBS Studio", icon: <Video className="w-8 h-8" />, description: "Scene switching, audio control, streaming commands" },
    { name: "Premiere Pro", icon: <Monitor className="w-8 h-8" />, description: "Timeline navigation, effects, export presets" },
    { name: "Twitch", icon: <Twitch className="w-8 h-8" />, description: "Chat commands, alerts, channel management" },
    { name: "YouTube", icon: <Youtube className="w-8 h-8" />, description: "Live control, analytics, quick uploads" },
    { name: "Spotify", icon: <Music className="w-8 h-8" />, description: "Playback control, volume, playlist switching" },
    { name: "Discord", icon: <Mic className="w-8 h-8" />, description: "Mute toggle, channel switching, PTT" }
  ]

  const products = [
    { name: "Stream Deck+", price: "$149", image: "/images/product-1.png", badge: "Featured" },
    { name: "Stream Deck MK.2", price: "$149", image: "/images/product-2.png", badge: null },
    { name: "Stream Deck Mini", price: "$79", image: "/images/product-3.png", badge: "Compact" }
  ]

  const testimonials = [
    {
      quote: "The Stream Deck+ completely transformed my editing workflow. What used to take 10 clicks now takes one.",
      author: "Professional Video Editor",
      role: "YouTube Creator with 2M+ Subscribers"
    },
    {
      quote: "Haptic feedback makes all the difference. I can control my entire stream without looking away from chat.",
      author: "Full Time Streamer",
      role: "Twitch Partner"
    },
    {
      quote: "The LCD keys showing real time info is game changing. I always know my stream status at a glance.",
      author: "Content Creator",
      role: "Multi Platform Broadcaster"
    }
  ]

  const faqs = [
    {
      question: "What software does Stream Deck+ work with?",
      answer: "Stream Deck+ integrates natively with over 500 applications including OBS Studio, Streamlabs, Adobe Premiere Pro, Final Cut Pro, Photoshop, Twitch, YouTube, Spotify, Discord, and many more. New integrations are added regularly."
    },
    {
      question: "How do I customize the LCD keys?",
      answer: "Use the free Stream Deck software to drag and drop actions, upload custom icons, or choose from thousands of pre made icon packs. Each key can be customized with any image, GIF, or live data display."
    },
    {
      question: "Is Stream Deck+ compatible with Mac and Windows?",
      answer: "Yes, Stream Deck+ works seamlessly with both macOS 10.15 or later and Windows 10 64 bit or later. The software experience is identical across both platforms."
    },
    {
      question: "Can I use Stream Deck+ for non streaming purposes?",
      answer: "Absolutely. Many professionals use Stream Deck+ for productivity shortcuts, music production, video editing, smart home control, and general workflow automation. Its not just for streamers."
    },
    {
      question: "What is the warranty period?",
      answer: "Stream Deck+ comes with a 2 year manufacturer warranty covering defects in materials and workmanship under normal use conditions."
    }
  ]

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Nav Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center">
                <Keyboard className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Elgato</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#71717a] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/90 text-white"
              >
                <Link href="#buy">Buy Now</Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4 bg-[#141414] border-t border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block text-[#71717a] hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#6c5ce7] hover:bg-[#6c5ce7]/90 text-white mt-4"
            >
              <Link href="#buy">Buy Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Full - Video Background */}
      <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#000' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/videos/hero-stramdecl.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.7))' }} />
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '0 24px' }}>
          <Badge className="mb-6 bg-[#6c5ce7]/20 text-[#6c5ce7] border-[#6c5ce7]/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            New Release
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
            Stream Deck
            <span className="text-[#6c5ce7]">+</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#71717a] max-w-2xl mb-8 font-light">
            The ultimate macro pad for creators. 15 LCD keys. Haptic feedback. Infinite possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/90 text-white text-lg px-8 py-6"
            >
              <Link href="#buy">
                Pre Order Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white text-lg px-8 py-6"
            >
              <Link href="#features">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 rotate-90 text-[#71717a]" />
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #6c5ce7 1px, transparent 1px), linear-gradient(to bottom, #6c5ce7 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Engineered for <span className="text-[#6c5ce7]">Creators</span>
            </h2>
            <p className="text-[#71717a] text-lg max-w-2xl mx-auto">
              Every detail designed to accelerate your creative workflow
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {/* Main Feature Card */}
            <Card className="col-span-2 row-span-2 bg-gradient-to-br from-[#141414] to-[#0a0a0a] border-[#6c5ce7]/20 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c5ce7]/10 rounded-full blur-3xl group-hover:bg-[#6c5ce7]/20 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#6c5ce7]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6c5ce7]/30 transition-colors">
                  <Grid3X3 className="w-8 h-8 text-[#6c5ce7]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{features[0].title}</h3>
                <p className="text-[#71717a] text-lg leading-relaxed">{features[0].description}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48">
                <Image
                  src="/images/stramdecl.png"
                  alt="Stream Deck LCD Keys"
                  fill
                  className="object-contain opacity-30 group-hover:opacity-50 transition-opacity"
                />
              </div>
            </Card>

            {/* Other Feature Cards */}
            {features.slice(1).map((feature, index) => (
              <Card
                key={index}
                className="bg-[#141414] border-white/5 p-6 hover:border-[#6c5ce7]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#6c5ce7]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6c5ce7]/20 transition-colors">
                  <div className="text-[#6c5ce7]">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-[#71717a] text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6c5ce7] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {stat.value}
                </div>
                <div className="text-[#71717a] uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Featured */}
      <section id="buy" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              Shop
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose Your <span className="text-[#6c5ce7]">Deck</span>
            </h2>
            <p className="text-[#71717a] text-lg max-w-2xl mx-auto">
              From compact to comprehensive, find the perfect fit for your setup
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`bg-[#141414] border-white/5 overflow-hidden group hover:border-[#6c5ce7]/30 transition-all duration-500 ${
                  index === 0 ? 'ring-2 ring-[#6c5ce7] ring-offset-2 ring-offset-[#0a0a0a]' : ''
                }`}
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-[#6c5ce7] text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#6c5ce7] mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {product.price}
                  </p>
                  <Button
                    className={`w-full ${
                      index === 0
                        ? 'bg-[#6c5ce7] hover:bg-[#6c5ce7]/90'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {index === 0 ? 'Pre Order Now' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards - Integrations */}
      <section id="integrations" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141414]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              Integrations
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Works With <span className="text-[#6c5ce7]">Everything</span>
            </h2>
            <p className="text-[#71717a] text-lg max-w-2xl mx-auto">
              Native support for over 500 applications and growing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <button
                key={index}
                onClick={() => setActiveIntegration(index)}
                className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                  activeIntegration === index
                    ? 'bg-[#6c5ce7] text-white scale-105'
                    : 'bg-[#141414] border border-white/5 hover:border-[#6c5ce7]/30 text-[#71717a]'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center ${
                  activeIntegration === index ? 'text-white' : 'text-[#6c5ce7]'
                }`}>
                  {integration.icon}
                </div>
                <span className="text-sm font-medium">{integration.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-12 bg-[#141414] rounded-3xl p-8 border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">{integrations[activeIntegration].name}</h3>
                <p className="text-[#71717a] text-lg mb-6">{integrations[activeIntegration].description}</p>
                <ul className="space-y-3">
                  {['One click scene switching', 'Custom macro commands', 'Live status display', 'Instant alerts'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#71717a]">
                      <Check className="w-5 h-5 text-[#6c5ce7]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative w-full md:w-1/2 aspect-video">
                <Image
                  src="/images/feature.png"
                  alt="Integration preview"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Workflow Demo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              Workflows
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Built for <span className="text-[#6c5ce7]">Your Workflow</span>
            </h2>
            <p className="text-[#71717a] text-lg max-w-2xl mx-auto">
              See how creators use Stream Deck+ to transform their process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Live Streaming', desc: 'Switch scenes, trigger alerts, control audio', icon: <Video className="w-6 h-6" /> },
              { title: 'Video Editing', desc: 'Timeline shortcuts, effects, rendering', icon: <Monitor className="w-6 h-6" /> },
              { title: 'Music Production', desc: 'DAW control, mixing, mastering presets', icon: <Music className="w-6 h-6" /> },
              { title: 'Gaming', desc: 'Macro commands, voice chat, recordings', icon: <Gamepad2 className="w-6 h-6" /> },
              { title: 'Productivity', desc: 'App launching, folder access, automation', icon: <Layers className="w-6 h-6" /> },
              { title: 'Smart Home', desc: 'Light control, scenes, device management', icon: <Settings className="w-6 h-6" /> }
            ].map((workflow, index) => (
              <Card
                key={index}
                className="bg-[#141414] border-white/5 p-6 hover:border-[#6c5ce7]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#6c5ce7]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#6c5ce7]/20 transition-colors">
                  <div className="text-[#6c5ce7]">{workflow.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{workflow.title}</h3>
                <p className="text-[#71717a]">{workflow.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141414]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              Reviews
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Loved by <span className="text-[#6c5ce7]">Creators</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#141414] border-white/5 p-8 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#6c5ce7] text-[#6c5ce7]" />
                  ))}
                </div>
                <blockquote className="text-lg text-white mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-[#71717a] text-sm">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#6c5ce7]/10 text-[#6c5ce7] border-[#6c5ce7]/20">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Got <span className="text-[#6c5ce7]">Questions?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <div className={`text-[#6c5ce7] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-[#71717a] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7]/20 via-transparent to-[#6c5ce7]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6c5ce7]/30 rounded-full blur-[128px]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your <span className="text-[#6c5ce7]">Workflow?</span>
          </h2>
          <p className="text-xl text-[#71717a] mb-10 max-w-2xl mx-auto">
            Join over 100,000 creators who have revolutionized their process with Stream Deck+
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/90 text-white text-lg px-10 py-6"
            >
              <Link href="#buy">
                Get Stream Deck+ for $149
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white text-lg px-10 py-6"
            >
              <Link href="mailto:support@elgato.com">Contact Sales</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-[#71717a]">
            Free shipping • 2 year warranty • 30 day returns
          </p>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#141414] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center">
                  <Keyboard className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Elgato</span>
              </Link>
              <p className="text-[#71717a] text-sm mb-6">
                Premium hardware for creators who demand excellence.
              </p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-[#71717a]"
                />
                <Button className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/90 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>

            {[
              { title: 'Products', links: ['Stream Deck+', 'Stream Deck MK.2', 'Stream Deck Mini', 'Stream Deck XL'] },
              { title: 'Resources', links: ['Downloads', 'Documentation', 'Tutorials', 'Community'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Partners'] },
              { title: 'Support', links: ['Help Center', 'Returns', 'Warranty', 'Contact'] }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-[#71717a] hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#71717a] text-sm">
              © {new Date().getFullYear()} Elgato. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#privacy" className="text-[#71717a] hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#terms" className="text-[#71717a] hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="#cookies" className="text-[#71717a] hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}