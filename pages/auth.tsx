// this is the authentication page

const auth=()=>{
    return(
        <div>
            {/* step one: email input */}
            <div>
                <form>
                    <input type="text"></input>
                    <button type="submit"></button>
                </form>
            </div>
           {/* step two: image input */}
           <div>
                <form>
                    <input type="image"></input>
                    {/* submit everything to firebase on this step */}
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )

}
export default auth