import { useState } from 'react';
import { Student, students } from './index';

const StudentInterface = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredStudents = students.filter(student => {
    return activeFilter === 'all' || student.status === activeFilter;
  });

  const handleDetailsClick = (student: Student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const AttendanceModal = () => {
    if (!selectedStudent) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedStudent.avatar}
                alt={`${selectedStudent.name}'s avatar`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-black">{selectedStudent.name}</h2>
                <p className="text-gray-600">{selectedStudent.course}</p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* Overall Attendance */}
            <div className="bg-gray-50 p-4 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Overall Attendance</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-purple-400 h-4 rounded-full"
                    style={{ width: `${selectedStudent.attendance}%` }}
                  />
                </div>
                <span className="ml-4 font-medium">{selectedStudent.attendance}%</span>
              </div>
            </div>

            {/* Recent Attendance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Attendance</h3>
              <div className="space-y-3">
                {selectedStudent.recentAttendance.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                  >
                    <span className="text-gray-700">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        record.status === 'present'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-gray-600">Roll Number</p>
                <p className="font-medium">{selectedStudent.rollNumber}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-gray-600">Semester</p>
                <p className="font-medium">{selectedStudent.semester}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen">
      <div className="max-w-full mx-auto px-4 py-6">
        <div className='flex justify-between'>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-black">Students</h1>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-purple-400 text-white'
                  : 'text-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('active')}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'active'
                  ? 'bg-purple-400 text-white'
                  : 'text-gray-700'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter('inactive')}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'inactive'
                  ? 'bg-purple-400 text-white'
                  : 'text-gray-700'
              }`}
            >
              Inactive
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="backdrop-blur-xl bg-gray-400/20 rounded-3xl px-4 py-6 relative hover:bg-gray-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={student.avatar}
                  alt={`${student.name}'s avatar`}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-lg text-black font-bold">{student.name}</h3>
                    <p className="text-sm text-gray-700 font-medium">{student.course}</p>
                  </div>
                  <div className="flex mt-4">
                    <p className="text-sm text-gray-500">Email:</p>
                    <p className="text-sm text-black ml-4">{student.email}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-14 flex justify-center items-center space-x-4">
                <button className="px-4 py-1.5 text-sm rounded-md bg-gray-200 border-2 font-medium border-black text-black transition-colors">
                  Block
                </button>
                <button
                  onClick={() => handleDetailsClick(student)}
                  className="px-4 py-1.5 text-sm rounded-md bg-gray-800 text-white font-medium border-2 border-gray-800 hover:bg-gray-900 transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <AttendanceModal />}
    </div>
  );
};

export default StudentInterface;