function navbar(){

    return `<div class="nav">
    <div class="nav_left">
        <img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" alt="">

    </div>
    <div class="nav_right">
        <div>
            <div>
                <ul>
                    <a href="">
                        <li>Store Locator</li>
                    </a>
                    <a href="">
                        <li>Contact Us</li>
                    </a>
                </ul>
            </div>
            <div>
                <ul>
                    <a href="signin.html">
                        <li>Login</li>
                    </a>
                    <a href="signup.html">
                        <li> <span>|</span> Register</li>
                    </a>
                </ul>
            </div>
        </div>


        <div class="nav_input_div">

            <div>

                <input type="text" placeholder="Pin-code">
                <select name="" id="">
                    <option value="---"></option>
                    <option value="">Patna</option>
                    <option value="">Mumbai</option>
                    <option value="">Delhi</option>
                    <option value="">Ranchi</option>
                </select>
                <div>
                    <input type="text" placeholder="search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <div class="nav_fav">
            <a href=""> <i class="far fa-star"></i></a>
                <a href=""> <i>|</i></a>
                <a href="cart.html"> <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a>
                
            </div>
        </div>
    </div>

</div>
<div class="nav_second">
    <ul>
        <a href="index.html">
            <li><span style="color: red;">HOME</span></li>
        </a>
        <a href="product.html">
            <li>Our Product</li>
        </a>
        <a href="">
            <li>GIFTING</li>
        </a>
        <a href="">
            <li>REWARDS</li>
        </a>
        <a href="">
            <li>BLOG</li>
        </a>
        <a href="">
            <li>OFFERS</li>
        </a>
        <a href="">
            <li>CONNOISSEUR'S SELECTION</li>
        </a>
        <a href="">
            <li>BOOK STORE VISIT</li>
        </a>
    </ul>
</div>
`

}

export default navbar