import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../Store/Auth/Action';
import { uploadToCloudinary } from '../../Utils/uploadToCloudinary';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
  outline: "none",
  overflow: "scroll-y",
};

export default function ProfileModal({open, handleClose}) {
  //const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = React.useState("");
  const {auth} = useSelector(store=>store)
  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values))
    console.log("handle submit", values);
    setSelectedImage("");
  }
  const handleImageChange = async(event) => {
    setUploading(true);
    const { name } = event.target
    const file = await uploadToCloudinary(event.target.files[0])
    formik.setFieldValue(name, file);
    setSelectedImage(file);
    setUploading(false);
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onSubmit: handleSubmit
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>

            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon />
                  <p className=''>Edit Profile</p>
                </IconButton>
              </div>
              <Button type='submit'>Save</Button>
            </div>

            <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <React.Fragment>
              <div>
                <div className='w-full'>
                  <div className='relative'>
                    <img
                      className='w-full h-[12rem] object-cover object-center'
                      src='https://cdn.pixabay.com/photo/2017/08/01/08/07/sea-2563389_640.jpg' alt=''></img>
                  
                  <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    name="backgroundImage"
                    onChange={handleImageChange}
                  />
                  </div>
                </div>
              </div >

                <div className="w-full transform -translate-y-20 ml-4">
                  <div className='relative'>
                    <Avatar
                      sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                      src={selectedImage || auth.user?.image} />
                    <input type="file"
                      className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                      onChange={handleImageChange}
                      name="image"
                    />
                  </div>
                </div>
              </React.Fragment>


              <div className='space-y-3'>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullname && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullname && formik.errors.fullName}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                />
              </div>
              <div className='my-3'>
                <p className='text-lg'>Birth date . Edit</p>
                <p className='text-2xl'>June 17, 2001</p>
              </div>
            <p className='py-3 text-lg'>Edit Professional Profile</p>

            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}