import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  waitlistType: {
    type: String,
    required: [true, 'Waitlist type is required'],
    enum: ['Laptop Crypto Node', 'nodeFÔN'],
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'notified', 'converted'],
    default: 'active'
  },
  notifiedAt: {
    type: Date
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Create compound index to prevent duplicate entries
waitlistSchema.index({ email: 1, waitlistType: 1 }, { unique: true });

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

export default Waitlist;
