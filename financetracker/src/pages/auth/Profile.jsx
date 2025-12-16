import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'
import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/helpers'

const Profile = () => {
  const navigate = useNavigate()
  const { isDarkMode, showNotification } = useUI()
  const { profile, profileLoading, profileError, saveProfile, loadProfile } = useData()

  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  })
  const [saving, setSaving] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (!profile && !profileLoading && !profileError) {
      loadProfile()
    }
  }, [profile, profileLoading, profileError, loadProfile])

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        location: profile.location || '',
      })
    }
  }, [profile])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async () => {
      try {
        await saveProfile({ photoUrl: reader.result })
        showNotification('Profile picture updated', 'success')
      } catch (err) {
        showNotification(err.message || 'Failed to update profile picture', 'error')
      }
    }
    reader.readAsDataURL(file)
  }

  const handleToggleEdit = async () => {
    if (!isEditing) {
      setIsEditing(true)
      return
    }

    if (!form.name.trim() || !form.email.trim()) {
      showNotification('Name and email are required', 'error')
      return
    }

    try {
      setSaving(true)
      await saveProfile({
        name: form.name,
        email: form.email,
        phone: form.phone,
        location: form.location,
      })
      showNotification('Profile updated successfully', 'success')
      setIsEditing(false)
    } catch (err) {
      showNotification(err.message || 'Failed to update profile', 'error')
    } finally {
      setSaving(false)
    }
  }

  const displayName = profile?.name || 'Dareen E.'
  const displayLocation = profile?.location || 'University Student • Giza, Egypt'
  const photoSrc = profile?.photoUrl || 'images\\user-blue-gradient\\0684456b-aa2b-4631-86f7-93ceaf33303c.jpg'
  const totalBalance = profile?.totalBalance ?? 12480
  const monthlySavings = profile?.monthlySavings ?? 2150
  const goalsCompleted = profile?.goalsCompleted || '4/6'

  return (
    <div className={`bg-page text-neutral-dark dark:bg-slate-900 dark:text-gray-100 font-sans min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="profile" />

      <main className="flex-grow flex flex-col items-center justify-start px-4 py-10">
        <div className="max-w-3xl w-full fade-in-up">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <img
                  src={photoSrc}
                  alt="Profile Picture"
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent/40"
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-primary dark:bg-blue-600 text-white p-2 rounded-full hover:bg-secondary dark:hover:bg-blue-700 transition"
                  title="Edit Photo"
                  onClick={handlePhotoClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536M9 13l3 3 9-9a2.121 2.121 0 00-3-3l-9 9z" />
                  </svg>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-neutral-dark dark:text-gray-100 mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-neutral-dark/20 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-blue-500"
                    />
                  ) : (
                    displayName
                  )}
                </h2>
                <p className="text-neutral-dark/70 dark:text-gray-400 mb-4">
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-neutral-dark/20 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-blue-500 text-sm"
                    />
                  ) : (
                    displayLocation
                  )}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 w-full bg-transparent border-b border-neutral-dark/20 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-blue-500 text-neutral-dark dark:text-gray-200"
                      />
                    ) : (
                      <p className="text-neutral-dark dark:text-gray-200 mt-1">{profile?.email || 'you@example.com'}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Phone</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 w-full bg-transparent border-b border-neutral-dark/20 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-blue-500 text-neutral-dark dark:text-gray-200"
                      />
                    ) : (
                      <p className="text-neutral-dark dark:text-gray-200 mt-1">{profile?.phone || '+20 123 456 7890'}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Member Since</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">
                      {profile?.memberSince ? new Date(profile.memberSince).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      }) : 'March 2024'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Account Type</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">{profile?.accountType || 'Personal'}</p>
                  </div>
                </div>

                {profileLoading && (
                  <p className="mt-4 text-xs text-neutral-dark/60 dark:text-gray-500">
                    Loading profile...
                  </p>
                )}
                {profileError && (
                  <p className="mt-4 text-xs text-red-500 dark:text-red-400">
                    {profileError}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleToggleEdit}
                    disabled={saving}
                    className="px-5 py-2.5 rounded-lg bg-primary dark:bg-blue-600 text-white hover:bg-secondary dark:hover:bg-blue-700 transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isEditing ? (saving ? 'Saving...' : 'Save Profile') : 'Edit Profile'}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/dashboard')}
                    className="px-5 py-2.5 rounded-lg border border-primary dark:border-blue-600 text-primary dark:text-blue-400 hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition font-medium"
                  >
                    Manage Finances
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Total Balance</p>
              <p className="text-2xl font-semibold text-primary dark:text-blue-400 mt-2">
                {formatCurrency(totalBalance)}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Monthly Savings</p>
              <p className="text-2xl font-semibold text-secondary dark:text-blue-500 mt-2">
                {formatCurrency(monthlySavings)}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Goals Completed</p>
              <p className="text-2xl font-semibold text-accent dark:text-yellow-400 mt-2">
                {goalsCompleted}
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-neutral-dark/70 dark:text-gray-400">
        © 2025 FinTrack. All rights reserved.
      </footer>
    </div>
  )
}

export default Profile


