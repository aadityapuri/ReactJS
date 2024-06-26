import React, {useCallback, useEffect, useState} from "react";
import { useForm, useWatch } from "react-hook-form";
import Button from '../Button'
import Input from '../Input'
import RTE from "../RTE";
import Select from '../Select'
import service from '../../appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function({post}){
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })

  
  const [href,setHref] = useState('')
  
  useEffect(()=>{
    console.log("This is called!!!");
    if(post){
      service.getPreviewImage(post.featuredImage).then((href)=> setHref(href));
      console.log("Got image href!!")
    }
  },[post])

  const navigate = useNavigate();
  const userData = useSelector((state)=>state.auth.userData)

  const submit = async(data)=>{
    console.log(data);
    if(post){
      const file = data.image[0]? await service.uploadFile(data.image[0]):null
      if(file){
        service.deleteFile(post.featuredImage)
      }
      const dbPost = await service.updatePost(post.$id,{
        ...data,
        featuredImage:file? file.$id : undefined
      })

      if(dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
    }
    else{
      const file = await service.uploadFile(data.featuredImage[0])
      if(file){
        const fileId = file.$id
        console.log(fileId);
        data.featuredImage = fileId
        console.log(data)
        const dbPost = await service.createDocument({...data, userId: userData.$id})

        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === "string"){
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-').replace(/\s/g, "-")
    }
  }, [])

  React.useEffect(()=>{
    watch((value, {name})=>{
      if(name === "title"){
        setValue("slug", slugTransform(value.title), {shouldValidate: true})
      }
    })
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)}
      className="flex flex-wrap"
    >
      <div className="w-2/3 px-2">
        <Input 
          label="Title"
          placeholder="Title"
          className="mb-4"
          {...register("title" ,{required:true})}
        />

        <Input 
          label="Slug"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", {required:true})}
          onInput={(e)=>{
            setValue("slug",slugTransform(e.currentTarget.value))
          }}
        />
        <RTE 
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
          <Input
            label="Featured Image"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg"
            {...register("featuredImage", {required: !post})}
          />
          {post && (
            <div className="w-full mb-4">
              <img src={href} alt={post.title} className="rounded-lg" />
            </div>
          )}
          <Select 
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status",{required:true})}
          />
          <Button
            type="submit"
            bgColor={post?'bg-green-500': undefined}
            className="w-full"
          >{post?'Update':'Submit'}</Button>
      </div>
    </form>
  )
}