import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { FaPaperPlane, FaTimes, FaSave } from 'react-icons/fa';

const DEFAULT_POST_DATA = { title: '', body: '' };
const postSchema = yup.object().shape({
  title: yup.string().min(3, 'Title is too short').required('Please enter a title'),
  body: yup.string().min(10, 'Story is too short').required('Please write some content'),
});

const PostForm = ({ initialData = DEFAULT_POST_DATA, onSubmit, isEditing = false }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await postSchema.validate(formData, { abortEarly: false });
      setErrors({});
      await onSubmit(formData);
    } catch (validationError) {
      const newErrors = {};
      if (validationError.inner) {
        validationError.inner.forEach(error => { newErrors[error.path] = error.message; });
      }
      setErrors(newErrors);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        
        {/* 1. Top Action Bar (Floating or Static) */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-white/10">
          <button
            type="button"
            onClick={() => navigate('/stories')}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center text-sm font-medium"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Saving...</span>
            ) : (
              <>
                {isEditing ? <FaSave className="mr-2" /> : <FaPaperPlane className="mr-2" />}
                {isEditing ? 'Update Story' : 'Publish'}
              </>
            )}
          </button>
        </div>

        {/* 2. The Editor Surface */}
        <div className="min-h-[60vh] animate-fade-in-up">
          

          <div className="mb-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-transparent text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-700 border-none focus:ring-0 p-0 leading-tight"
              autoComplete="off"
              autoFocus
            />
            {errors.title && <p className="mt-2 text-sm text-red-500 font-medium">{errors.title}</p>}
          </div>


          <div className="relative">
            <textarea
              name="body"
              placeholder="Tell your story..."
              value={formData.body}
              onChange={handleChange}
              className="w-full h-[calc(100vh-300px)] bg-transparent text-lg md:text-xl text-slate-700 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-600 border-none focus:ring-0 p-0 resize-none leading-relaxed font-serif"
            />
             {errors.body && <p className="absolute top-0 right-0 text-sm text-red-500 font-medium">{errors.body}</p>}
          </div>
        </div>

      </form>
    </div>
  );
};

export default PostForm;