# Angular Performance Patterns

A collection of focused, realistic examples demonstrating performance best practices in Angular 19. This repository is designed to showcase senior-level Angular performance optimization techniques that can be discussed in technical interviews.

## 🎯 Purpose

This repository demonstrates common performance patterns in Angular 19 through small, isolated examples. Each example is:

- **Focused**: Each example demonstrates one specific pattern
- **Realistic**: Examples use real-world scenarios
- **Educational**: Clear explanations and console logging
- **Production-Ready**: Code follows Angular best practices

## 🛠️ Tech Stack

- **Angular 19** - Latest Angular version
- **Standalone Components** - No NgModules
- **TypeScript** - Strict mode enabled
- **Signals** - Used where appropriate for state management
- **RxJS** - For async operations
- **ChangeDetectionStrategy.OnPush** - For performance-focused components
- **ESLint + Prettier** - Code quality and formatting

## 📦 Installation

```bash
npm install
```

## 🚀 Running the Application

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## 📚 Examples

### 1. OnPush vs Default Change Detection

**Route:** `/onpush-vs-default`

Demonstrates the performance difference between Default and OnPush change detection strategies.

**Key Concepts:**
- Default change detection checks all components on every cycle
- OnPush only checks when inputs change or events occur within the component
- Dramatically reduces unnecessary re-renders in large applications

**What to Look For:**
- Open the browser console to see change detection logs
- Default child component re-renders on EVERY change detection cycle
- OnPush child component only re-renders when its inputs actually change
- Notice how the global counter triggers Default but not OnPush

### 2. TrackBy with Large Lists

**Route:** `/track-by-large-lists`

Shows how `trackBy` improves performance when rendering large lists by minimizing DOM manipulation.

**Key Concepts:**
- Without `trackBy`: Angular destroys and recreates all items when list changes
- With `trackBy`: Only changed items are updated
- Essential for lists with 100+ items

**What to Look For:**
- Open the browser console to see component lifecycle logs
- Without trackBy: All items are recreated on every change
- With trackBy: Only changed items are updated
- Try updating, adding, or removing items to see the difference

### 3. Smart vs Presentational Components

**Route:** `/smart-vs-presentational`

Demonstrates the Container/Presentational pattern for better performance and maintainability.

**Key Concepts:**
- Smart components handle data fetching, state management, and business logic
- Presentational components are pure UI with `@Input`/`@Output`
- Presentational components use OnPush for better performance
- Improves reusability, testability, and performance

**What to Look For:**
- Smart components: Fetch data, manage state, handle business logic
- Presentational components: Pure UI, receive `@Input`, emit `@Output`
- Presentational components use OnPush for better performance
- This pattern improves reusability, testability, and performance

### 4. Lazy Loading and Preloading

**Route:** `/lazy-loading-and-preloading`

Shows how lazy loading reduces initial bundle size and how preloading improves perceived performance.

**Key Concepts:**
- Lazy loading splits code into smaller chunks
- Features are loaded on-demand when routes are accessed
- Custom preloading strategies allow fine-grained control
- Reduces Time to Interactive (TTI)

**What to Look For:**
- Check Network tab in DevTools to see module loading behavior
- Initial bundle is smaller, improving Time to Interactive (TTI)
- Routes are loaded on-demand when accessed
- Custom preloading strategy preloads routes with `data: { preload: true }`

**Sub-routes:**
- `/lazy-loading-and-preloading/reports` - Lazy loaded reports feature
- `/lazy-loading-and-preloading/admin` - Preloaded admin feature
- `/lazy-loading-and-preloading/analytics` - Lazy loaded analytics feature

### 5. runOutsideAngular for Heavy Work

**Route:** `/run-outside-angular`

Demonstrates how to run CPU-intensive operations outside Angular zone to prevent blocking change detection.

**Key Concepts:**
- Heavy synchronous work blocks the main thread and triggers change detection
- `runOutsideAngular` prevents change detection during heavy work
- Use `run()` to re-enter Angular zone only when UI updates are needed
- Essential for CPU-intensive operations, image processing, etc.

**What to Look For:**
- Watch the change detection counter to see the difference
- Heavy work inside zone triggers many change detection cycles
- Heavy work outside zone only triggers change detection once for UI update
- The UI should remain responsive when using `runOutsideAngular`

## 🗂️ Project Structure

```
src/app/
├── core/                    # Core services and utilities
│   └── services/
│       ├── heavy-calculation.service.ts
│       ├── fake-api.service.ts
│       └── custom-preloading-strategy.service.ts
├── shared/                  # Reusable components
│   └── components/
│       └── info-panel/      # Info panel for examples
├── examples/                # Performance pattern examples
│   ├── onpush-vs-default/
│   ├── track-by-large-lists/
│   ├── smart-vs-presentational/
│   ├── lazy-loading-and-preloading/
│   └── run-outside-angular/
├── home/                    # Home page component
├── app.component.ts         # Root component
├── app.routes.ts            # Route configuration
└── app.config.ts            # App configuration
```

## 🎤 Using This Repository in Interviews

This repository is designed to be a portfolio-quality showcase of Angular performance expertise. Here's how to use it effectively:

### Before the Interview

1. **Review each example** - Understand the performance implications of each pattern
2. **Practice explaining** - Be ready to explain why each pattern improves performance
3. **Know the trade-offs** - Understand when to use each pattern and when not to

### During the Interview

1. **Start with the home page** - Show the overview of all examples
2. **Navigate to specific examples** - Demonstrate each pattern interactively
3. **Open the console** - Show the logging that demonstrates the performance differences
4. **Explain the code** - Walk through the implementation and explain the key concepts
5. **Discuss real-world applications** - Connect the patterns to actual production scenarios

### Key Talking Points

- **OnPush**: "In a large application with hundreds of components, OnPush can reduce change detection cycles by 80-90%"
- **TrackBy**: "For a list of 1000 items, trackBy can reduce DOM operations from 1000 to just the changed items"
- **Smart/Presentational**: "This pattern makes components more testable and reusable, while improving performance through OnPush"
- **Lazy Loading**: "Lazy loading can reduce initial bundle size by 50-70%, dramatically improving Time to Interactive"
- **runOutsideAngular**: "For CPU-intensive operations, running outside Angular zone prevents UI blocking and unnecessary change detection"

## 📝 Code Quality

- **TypeScript Strict Mode** - All code uses strict type checking
- **No `any` types** - All types are explicitly defined
- **ESLint** - Code follows Angular best practices
- **Prettier** - Consistent code formatting
- **Comments** - Key performance optimizations are documented

## 🔧 Development

### Build

```bash
ng build
```

### Run Tests

```bash
ng test
```

### Lint

```bash
ng lint
```

## 📖 Additional Resources

- [Angular Change Detection](https://angular.dev/guide/change-detection)
- [Angular Performance Best Practices](https://angular.dev/guide/performance)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Router - Lazy Loading](https://angular.dev/guide/router#lazy-loading)

## 📄 License

This project is for educational purposes and portfolio demonstration.

## 👤 Author

Created as a portfolio project to demonstrate senior-level Angular performance optimization expertise.

---

**Note:** This repository focuses on performance patterns. For a complete Angular application, consider combining these patterns with proper state management, error handling, and testing strategies.
