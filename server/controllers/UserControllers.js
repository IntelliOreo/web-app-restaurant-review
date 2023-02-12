import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

/**
 * @description Sign Up user
 */


export const signUp = async (req, res) => {
        let { username, password,email  } = req.body
        
         if ( !username || !password || !email ){
           return res.status(400).json({
            message: "Missing required fields"
           })
         }
      
         try {
       const salt = await bcrypt.genSalt()
       var hash = await bcrypt.hash(password,salt)
       password = hash;
       const newUser = await User.create({username,password,email})
      return res.status(200).json ({
        note: newUser
      })  
      } catch (error) {
          console.log(error)
          return res.status(500).json({
            message:"Server error sign up"+error,
          })
         }
      
}

/**
 * @description Sing In user
 */
export const signIn = async (req, res) => {}

/**
 * @description Sign Out user
 */
export const signOut = async (req, res) => {}

