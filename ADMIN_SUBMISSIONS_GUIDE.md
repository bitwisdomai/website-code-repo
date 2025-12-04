# Admin Submissions Panel - User Guide

## Overview
The admin submissions panel provides a centralized location to view and manage all user submissions from various forms across the BitWisdom platform.

## Accessing the Panel
1. Navigate to `/admin/login` and log in with admin credentials
2. From the admin dashboard, click on "Submissions" or navigate to `/admin/submissions`

## Features

### Four Separate Tabs:

#### 1. Qualifying Applications
- View all business qualification form submissions
- Displays: Business name, email, phone, status, submission date
- **Details Include:**
  - Business information (name, type, address, email, phone)
  - Registration details (number, jurisdiction, tax ID, nationality)
  - Ownership & structure (beneficial owners, corporate structure)
  - Financial information (source of funds, intended use)
- **Status Options:**
  - Pending
  - Under Review
  - Approved
  - Rejected
- **Actions:**
  - View full details in modal
  - Update status
  - Delete submission
  - Filter by status
  - Pagination

#### 2. Contact Form Submissions
- View all contact form submissions from the homepage
- Displays: Name, email, interest type, status, submission date
- **Details Include:**
  - Contact information (name, email, phone)
  - Interest area (licensing, partnership, demo, support)
  - Message content
- **Status Options:**
  - New
  - Contacted
  - In Progress
  - Resolved
  - Closed
- **Actions:**
  - View full details in modal
  - Update status
  - Delete submission
  - Filter by status
  - Pagination

#### 3. Laptop Crypto Node Waitlist
- View all users interested in Laptop Crypto Node
- Displays: Name, email, status, join date
- **Status Options:**
  - Active
  - Notified
  - Converted
- **Actions:**
  - View details
  - Update status
  - Delete entry
  - Filter by status
  - View notification dates

#### 4. Mobile Node (nodeFÔN) Waitlist
- View all users interested in Mobile Crypto Node (nodeFÔN)
- Displays: Name, email, status, join date
- **Status Options:**
  - Active
  - Notified
  - Converted
- **Actions:**
  - View details
  - Update status
  - Delete entry
  - Filter by status
  - View notification dates

## Dashboard Statistics
Each tab displays real-time statistics:
- Total entries/submissions
- Count by status (Pending, Approved, New, Active, etc.)
- Color-coded status badges for easy identification

## API Endpoints Used
- **Qualifying Applications:** `/api/qualifying`
- **Contact Submissions:** `/api/contact`
- **Waitlists:** `/api/waitlist` (filtered by type)

## Navigation
- The Submissions panel is accessible from:
  - Admin Dashboard card
  - Admin Layout sidebar navigation
  - Direct URL: `/admin/submissions`

## Features Included
✅ Tabbed interface for easy navigation
✅ Real-time statistics cards
✅ Status filtering for each form type
✅ Pagination support (10 items per page)
✅ Detailed view modals
✅ Status update functionality
✅ Delete functionality with confirmation
✅ Responsive design
✅ Color-coded status badges
✅ Date formatting
✅ Empty state messages

## Security
- All admin routes are protected with authentication
- Requires login to access
- Only authenticated admin users can view and manage submissions

## Future Enhancements
Potential features to add:
- Export to CSV/Excel
- Bulk status updates
- Email notification system
- Search functionality
- Advanced filtering options
- Notes/comments system per submission
- Activity log/audit trail
