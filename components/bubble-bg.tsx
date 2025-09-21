const BubbleBG = () => {
  return (
    <>
      <div className="absolute top-5 left-8 w-16 h-16 bg-[#ffcbba] opacity-20 rounded-full animate-float2" />
      <div className="absolute top-20 left-40 w-28 h-28 bg-[#fd9e8a] opacity-15 rounded-full animate-float1" />

      {/* Top Right */}
      <div className="absolute top-10 right-24 w-20 h-20 bg-[#a32920] opacity-10 rounded-full animate-float1" />
      <div className="absolute top-32 right-10 w-14 h-14 bg-[#cf7973] opacity-25 rounded-full animate-float3" />

      {/* Middle scatter */}
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#fb855d] opacity-10 rounded-full animate-float1" />
      <div className="absolute top-1/4  w-24 h-24 bg-[#ffc488] opacity-10 rounded-full animate-float3" />
      <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#fb855d] opacity-10 rounded-full animate-float2" />
      <div className="absolute -top-10 w-24 h-24 bg-[#fb855d] opacity-10 rounded-full animate-float1" />
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-[#f5823a] opacity-15 rounded-full animate-float4" />
      <div className="absolute top-1/3 left-1/5 w-20 h-20 bg-[#f06347] opacity-20 rounded-full animate-float2" />

      {/* Bottom Left */}
      <div className="absolute bottom-16 left-24 w-28 h-28 bg-[#da564d] opacity-10 rounded-full animate-float4" />
      <div className="absolute bottom-24 left-8 w-20 h-20 bg-[#cf7973] opacity-20 rounded-full animate-float1" />

      {/* Bottom Right */}
      <div className="absolute bottom-10 right-12 w-24 h-24 bg-[#ffcbba] opacity-20 rounded-full animate-float2" />
      <div className="absolute bottom-5 right-40 w-16 h-16 bg-[#fd9e8a] opacity-15 rounded-full animate-float3" />
      <div className="absolute top-[5%] left-[10%] w-16 h-16 bg-[#ffcbba] opacity-20 rounded-full animate-float1" />
      <div className="absolute top-[8%] right-[15%] w-20 h-20 bg-[#fd9e8a] opacity-15 rounded-full animate-float3" />
      <div className="absolute top-[12%] left-[45%] w-12 h-12 bg-[#cf7973] opacity-20 rounded-full animate-float4" />

      {/* Middle Scatter */}
      <div className="absolute top-[40%] left-[20%] w-28 h-28 bg-[#da5c53] opacity-10 rounded-full animate-float4" />
      <div className="absolute top-[50%] left-[60%] w-24 h-24 bg-[#ffcbba] opacity-15 rounded-full animate-float2" />
      <div className="absolute top-[55%] right-[30%] w-14 h-14 bg-[#fd9e8a] opacity-20 rounded-full animate-float1" />
      <div className="absolute top-[35%] right-[15%] w-32 h-32 bg-[#4d251d] opacity-10 rounded-full animate-float4" />

      {/* Bottom Scatter */}
      <div className="absolute bottom-[10%] left-[12%] w-20 h-20 bg-[#cf7973] opacity-25 rounded-full animate-float3" />
      <div className="absolute bottom-[15%] left-[35%] w-16 h-16 bg-[#ffcbba] opacity-20 rounded-full animate-float1" />
      <div className="absolute bottom-[18%] right-[20%] w-28 h-28 bg-[#f0a56f] opacity-15 rounded-full animate-float2" />
      <div className="absolute bottom-[5%] right-[5%] w-24 h-24 bg-[#fd9e8a] opacity-20 rounded-full animate-float3" />
      <div className="absolute bottom-[12%] right-[40%] w-12 h-12 bg-[#ea874e] opacity-15 rounded-full animate-float1" />
    </>
  );
};

export default BubbleBG;
