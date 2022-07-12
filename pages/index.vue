<template>
  <head>
    <Title>Jacob Morgan</Title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍄</text></svg>">
  </head>
  <body class="bg-slate-800 font-mono ">
    <div class=" grid place-items-start rounded  justify-center inset-0  absolute w-2/3 h-48 max-w-screen-md m-auto  text-white mx-auto leading-loose" >

      <div class = "grid place-items-center justify-center inset-0 ">
        <!-- 
        <div class="w-6/12 sm:w-4/12 px-4">
          <img src="img/me.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        -->
        <h1 class="font-medium text-4xl ">Jacob Morgan</h1>
        <p class="text-center"> This website is temporary<br> For more places to connect click here</p>
        <button class = " btn btn-grey " onclick = "window.open('https://linktr.ee/jacobwmorgan', '_blank')">LinkTree</button>
      </div>
    </div>
  </body>
</template>


<style>
  .btn
  {
    @apply  text-center text-2xl py-2 px-4 font-semibold rounded-lg shadow-md ;
  }
  .btn-grey
  {
    @apply text-white hover:text-white  bg-slate-500 hover:bg-slate-600;
  }

</style>