<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Phonebook App</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div id="app">
         {{-- include Header file --}}
           <Myheader></Myheader>
           <div class="container">
           {{-- include switching components --}}
             <router-view></router-view>
           </div>
          {{-- include footer file --}}              
           <Myfooter></Myfooter>
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
